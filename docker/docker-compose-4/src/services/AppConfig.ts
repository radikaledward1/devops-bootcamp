export const datadog_client_token: string = process.env.DATADOG_CLIENT_TOKEN ? process.env.DATADOG_CLIENT_TOKEN : '';
export const datadog_site: string = process.env.DATADOG_SITE ? process.env.DATADOG_SITE : '';
export const datadog_sample_rate: number = process.env.DATADOG_SAMPLE_RATE ? parseInt(process.env.DATADOG_SAMPLE_RATE) : 100;
export const datadog_forward_errors_to_logs: boolean = process.env.DATADOG_FORWARD_ERRORS_TO_LOG ? !!parseInt(process.env.DATADOG_FORWARD_ERRORS_TO_LOG, 10) : false;