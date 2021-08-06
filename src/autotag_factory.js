import find from 'lodash/find';
import values from 'lodash/values';
import AutotagDefaultWorker from './workers/autotag_default_worker';
import AutotagEC2Worker from './workers/autotag_ec2_worker';
import AutotagSecurityGroupWorker from './workers/autotag_security_group_worker';
import AutotagSnapshotWorker from './workers/autotag_snapshot_worker';
import CONFIG from './cloud_trail_event_config';

const AutotagFactory = {
  createWorker: (event, enabledServices, s3Region) => {
    // Match Service
    const matchingService = find(values(CONFIG), { targetEventName: event.eventName });

    // Check service found and service enabled
    if (typeof matchingService === 'undefined'
      || enabledServices.indexOf(matchingService.name) < 0) {
      // Default: worker that does nothing
      return new AutotagDefaultWorker(event, s3Region);
    }

    // Select the relevant worker
    switch (matchingService.name) {
      case CONFIG.EC2.name:
        return new AutotagEC2Worker(event, s3Region);

      case CONFIG.SECURITY_GROUP.name:
        return new AutotagSecurityGroupWorker(event, s3Region);

      case CONFIG.SNAPSHOT_CREATE.name:
        return new AutotagSnapshotWorker(event, s3Region);

      case CONFIG.SNAPSHOT_COPY.name:
        return new AutotagSnapshotWorker(event, s3Region);

      case CONFIG.SNAPSHOT_IMPORT.name:
        return new AutotagSnapshotWorker(event, s3Region);

      // Default: worker that does nothing
      default:
        return new AutotagDefaultWorker(event, s3Region);
    }
  }
};

export default AutotagFactory;
