import AwsCloudTrailLogListener from './aws_cloud_trail_log_listener';

if (!global._babelPolyfill) {
  require('babel-polyfill'); // eslint-disable-line global-require
}

export const handler = async (cloudtrailEvent, context) => {
  const enabledListeners = [
    AwsCloudTrailLogListener.EC2.name,
    AwsCloudTrailLogListener.SECURITY_GROUP.name,
    AwsCloudTrailLogListener.SNAPSHOT_CREATE.name,
    AwsCloudTrailLogListener.SNAPSHOT_COPY.name,
    AwsCloudTrailLogListener.SNAPSHOT_IMPORT.name

  ];

  const listener = new AwsCloudTrailLogListener(cloudtrailEvent, context, enabledListeners);
  await listener.execute();
};

export default handler;
