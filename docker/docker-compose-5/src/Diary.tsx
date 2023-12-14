import React, { useEffect, useState } from 'react';
import { Button, Container, Entries, Line, Select, Textarea, Card, CardItem } from './components/styles';
import * as DiaryService from './services/diaryService';
import { DiaryEntry, newDiaryEntry } from './services/types';
import { datadogInit } from './services/datadog';

const Diary = () => {

    const [entries, setEntries] = useState<DiaryEntry[]>([]);
    const [values, setValues] = useState({ weather: '', visibility: '', comments: '' });

    useEffect(() => {
        datadogInit();
        DiaryService.getDiaryEntries().then((entries) => {
            const diaryentries = entries ? entries : [];
            setEntries(diaryentries);
        })
    }, [])

    const handleChangeVisibility = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValues({ ...values, visibility: event.target.value });
    };

    const handleChangeWeather = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValues({ ...values, weather: event.target.value });   
    };

    const handleChangeComments = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValues({ ...values, comments: event.target.value });
    };

    const formatDate = (date: Date): string =>{
        const formattedDate = date.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).split('/').reverse().join('-');
        return formattedDate;
    }

    const saveEntry = () => {
        const newEntry: newDiaryEntry = {
            weather: values.weather,
            visibility: values.visibility,
            comments: values.comments,
            date: formatDate(new Date())
        };
        DiaryService.addDiaryEntry(newEntry).then((entry) => {
            if (entry) {
                setEntries(entries.concat(entry));
                setValues({ ...values, weather: '', visibility: '', comments: '' });   
            }
        });
    };

    return (
        <Container>
            <h1>Weather Diary</h1>
            <div>
                <label>Weather:</label><br/>
                <Select onChange={handleChangeVisibility}>
                    <option value="sunny">Sunny</option>
                    <option value="cloudy">Cloudy</option>
                    <option value="rainy">Rainy</option>
                    <option value="stormy">Stormy</option>
                    <option value="windy">Windy</option>
                </Select><br/>
                <label>Visibility:</label><br/>
                <Select onChange={handleChangeWeather}>
                    <option value="very good">Very Good</option>
                    <option value="good">Good</option>
                    <option value="bad">Bad</option>
                    <option value="very bad">Very Bad</option>
                </Select><br/>
                <label>Comments:</label><br/>
                <Textarea onChange={handleChangeComments} value={values.comments}/><br/>
                <Button type="button" onClick={saveEntry}>Save</Button>
            </div>
            <div>
                <Line></Line>
            </div>
            <Entries>
                {
                    entries.map((entry) => {
                        return <Card key={entry._id}>
                            <CardItem>
                                <label>Weather:</label>
                                <span>{entry.weather}</span>
                            </CardItem>
                            <CardItem>
                                <label>Visibility:</label>
                                <span>{entry.visibility}</span>
                            </CardItem>
                            <CardItem>
                                <label>Comments:</label>
                                <span>{entry.comments}</span>
                            </CardItem>
                            <CardItem>
                                <label>Date:</label>
                                <span>{entry.date}</span>
                            </CardItem>
                        </Card>
                    })
                }
            </Entries>
        </Container>
    )
}

export default Diary