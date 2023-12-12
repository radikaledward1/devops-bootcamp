// import { datadogLogs } from '@datadog/browser-logs';
// import * as AppConfig from '../services/AppConfig';

// let datadogInitialized: boolean = false;

// const datadogInit = (): void => {
//     if (!datadogInitialized) {
//         datadogLogs.init({
//             clientToken: AppConfig.datadog_client_token,
//             site: AppConfig.datadog_site,
//             forwardErrorsToLogs: AppConfig.datadog_forward_errors_to_logs,
//             sessionSampleRate: AppConfig.datadog_sample_rate,
//         });

//         datadogInitialized = true;
//     }
// }

// export default datadogInit;