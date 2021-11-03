import React from "react";

import {Grid} from '@material-ui/core';
import youtube from "./api/youtube";
import {SearchBar, VideoDetail, VideoList} from './components'

class App extends React.Component{

    handleSubmit = async (searchTerm) => {
        const res = await youtube.get('search', { params: {q: searchTerm}        
    });
        console.log(res);
    }
    render(){
        return(
            <Grid justifyContent="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />

                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />

                        </Grid>
                        <Grid item xs={4}>
                            {/* video list */}
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        )
    }
}

export default App;