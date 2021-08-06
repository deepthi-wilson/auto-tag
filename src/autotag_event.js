import AwsCloudTrailEventListener from './aws_cloud_trail_event_listener';

if (!global._babelPolyfill) {
  require('babel-polyfill'); // eslint-disable-line global-require
}

export const handler = async (cloudtrailEvent, context) => {
  const enabledListeners = [
    AwsCloudTrailEventListener.EC2.name,
    AwsCloudTrailEventListener.SECURITY_GROUP.name,
    AwsCloudTrailEventListener.SNAPSHOT_CREATE.name,
    AwsCloudTrailEventListener.SNAPSHOT_COPY.name,
    AwsCloudTrailEventListener.SNAPSHOT_IMPORT.name,
  ];

  const listener = new AwsCloudTrailEventListener(cloudtrailEvent, context, enabledListeners);
  await listener.execute();
};

export default handler;
