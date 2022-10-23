import { Component } from "react";

import axios from 'axios';


axios.defaults.baseURL = "https://pixabay.com/"



export class API extends Component {


    async componentDidUpdate(prevProps, prevState) {
    
        if (prevProps.dataQuery !== this.props.dataQuery || prevProps.dataPage !== this.props.dataPage) {
            
           const response = await axios.get('api', {
                                                    params: {
                                                        q: this.props.dataQuery,
                                                        key: '29780363-e0273b64f82bba5b73a3e8070',
                                                        image_type: 'photo',
                                                        orientation: 'horizontal',
                                                        per_page: 12,
                                                        page: this.props.dataPage,
                                                    },
                                                    })
    this.props.request(response.data)

        }
    }
    render() {
       return
   }
 }  

