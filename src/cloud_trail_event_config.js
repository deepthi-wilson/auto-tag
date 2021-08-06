export default {
  EC2: {
    name: 'ec2',
    targetEventName: 'RunInstances',
    targetEventType: null,
    targetEventSource: null
  },
  SECURITY_GROUP: {
    name: 'securityGroup',
    targetEventName: 'CreateSecurityGroup',
    targetEventType: null,
    targetEventSource: null
  },
  SNAPSHOT_CREATE: {
    name: 'snapshot',
    targetEventName: 'CreateSnapshot',
    targetEventType: null,
    targetEventSource: null
  },
  SNAPSHOT_COPY: {
    name: 'snapshot',
    targetEventName: 'CopySnapshot',
    targetEventType: null,
    targetEventSource: null
  },
  SNAPSHOT_IMPORT: {
    name: 'snapshot',
    targetEventName: 'ImportSnapshot',
    targetEventType: null,
    targetEventSource: null
  }
};
