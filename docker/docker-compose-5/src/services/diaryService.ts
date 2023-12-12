import axios from "axios";
import { datadogLogs } from "@datadog/browser-logs";
import * as AppConfig from "./AppConfig";
import { DiaryEntry, newDiaryEntry } from "./types";

const baseUrl = AppConfig.base_api_url;

export const getDiaryEntries = async () => {
    try {
        const { data } = await axios.get<DiaryEntry[]>(baseUrl);
        datadogLogs.logger.info('', {method: 'GET', endpoint: baseUrl, status: 200, response: data})
        return data;
    } catch (error) {
        //console.log('An Error has occurred: ' + error);
        datadogLogs.logger.error('', {method: 'GET', endpoint: baseUrl, status: 500, response: error})
    }
};

export const addDiaryEntry = async (entry: newDiaryEntry) => {
    try {
        const { data } = await axios.post<DiaryEntry>(baseUrl, entry);
        datadogLogs.logger.info('', {method: 'POST', endpoint: baseUrl, status: 201, response: data})
        return data;
    } catch (error) {
        //console.log('An Error has occurred: ' + error);
        datadogLogs.logger.error('', {method: 'POST', endpoint: baseUrl, status: 500, response: error})
    }
}