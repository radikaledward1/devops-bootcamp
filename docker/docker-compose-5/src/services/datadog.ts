import { datadogRum } from "@datadog/browser-rum";
import * as AppConfig from './AppConfig';

let datadogInitialized: boolean = false;

export const datadogInit = (): void => {
    if (!datadogInitialized) {
        datadogRum.init({
            applicationId: AppConfig.datadog_application_id,
            clientToken: AppConfig.datadog_client_token,
            site: AppConfig.datadog_site,
            service: AppConfig.datadog_service,
            // env: '<ENV_NAME>',
            // Specify a version number to identify the deployed version of your application in Datadog 
            // version: '1.0.0', 
            sessionSampleRate: AppConfig.datadog_sample_rate,
            sessionReplaySampleRate: AppConfig.datadog_replay_sample_rate,
            trackUserInteractions: AppConfig.datadog_track_user_interactions,
            trackResources: AppConfig.datadog_track_resources,
            trackLongTasks: AppConfig.datadog_track_long_tasks,
            defaultPrivacyLevel: 'allow',
        });

        datadogInitialized = true;
    }
}