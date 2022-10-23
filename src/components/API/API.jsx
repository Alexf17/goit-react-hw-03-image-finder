import { Component } from "react";

import axios from 'axios';


axios.defaults.baseURL = "https://pixabay.com/api"
const API_KEY = '29780363-e0273b64f82bba5b73a3e8070';
const FILTERS = 'image_type=photo&orientation=horizontal&per_page=12';


export class API extends Component {


    async componentDidUpdate(prevProps, prevState) {
    
        if (prevProps.dataQuery !== this.props.dataQuery || prevProps.dataPage !== this.props.dataPage) {
            
            const response = await axios.get(
    `?q=${this.props.dataQuery}&page=${this.props.dataPage}&key=${API_KEY}&${FILTERS}`
  );
              
    this.props.request(response.data)

        }
    }
    render() {
       return
   }
 }  

