// DataDog
export const datadog_application_id: string = process.env.REACT_APP_DATADOG_APPLICATION_ID ? process.env.REACT_APP_DATADOG_APPLICATION_ID : '';
export const datadog_client_token: string = process.env.REACT_APP_DATADOG_CLIENT_TOKEN ? process.env.REACT_APP_DATADOG_CLIENT_TOKEN : '';
export const datadog_site: string = process.env.REACT_APP_DATADOG_SITE ? process.env.REACT_APP_DATADOG_SITE : '';
export const datadog_service: string = process.env.REACT_APP_DATADOG_SERVICE ? process.env.REACT_APP_DATADOG_SERVICE : '';
export const datadog_sample_rate: number = process.env.REACT_APP_DATADOG_SAMPLE_RATE ? parseInt(process.env.REACT_APP_DATADOG_SAMPLE_RATE) : 100;
export const datadog_replay_sample_rate: number = process.env.REACT_APP_DATADOG_REPORT_SAMPLE_RATE ? parseInt(process.env.REACT_APP_DATADOG_REPORT_SAMPLE_RATE) : 20;
export const datadog_track_user_interactions: boolean = process.env.REACT_APP_DATADOG_TRACK_USER_INTERACTIONS ? !!parseInt(process.env.REACT_APP_DATADOG_TRACK_USER_INTERACTIONS, 10) : false;
export const datadog_track_resources: boolean = process.env.REACT_APP_DATADOG_TRACK_RESOURCES ? !!parseInt(process.env.REACT_APP_DATADOG_TRACK_RESOURCES, 10) : false;
export const datadog_track_long_tasks: boolean = process.env.REACT_APP_DATADOG_TRACK_LONG_TASKS ? !!parseInt(process.env.REACT_APP_DATADOG_TRACK_LONG_TASKS, 10) : false;