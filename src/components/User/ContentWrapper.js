//Uber, Kakao 등 동향이 들어가는 wrapper

import React, { Component } from 'react';
import styled from 'styled-components';
import News from './News'

//Styling
const Box = styled.div`
    margin-left: 40px;
    margin-top: 40px;
    padding-top: 30px;
    padding-left: 20px;
    width : 500px;
    height: 1200px;
    background: white;
`;

const TitleArea = styled.div`
    width: 400px;
    height: 60px;
    padding-left: 10px;
    margin-bottom: 20px;
    font-family: 'FF Clan';
    font-weight: bold;
    font-size: 40px;
    display: flex;
    align-items: center;
    background: white;
`;

class ContentWrapper extends Component {

    state = {
        uber: '',
        kakao: '',
        taxi: ''
    }

    //API통신 1 : 우선 API에서 fetch해서 jsons in List 형태로 데이터를 받아와야 편함
    _fetchUberNews = () => {

        return fetch('http://127.0.0.1:8000/fetch_uber',{
            method: 'GET',
            mode: 'cors',
            crossDomain: true
        })
        .then((response)=>{
            return response.json();
        })
        .catch(err => console.log(err));
  }

    _fetchKakaoNews = () => {

        return fetch('http://127.0.0.1:8000/fetch_kakao',{
            method: 'GET',
            mode: 'cors',
            crossDomain: true
        })
        .then((response)=>{
            return response.json();
        })
        .catch(err => console.log(err));
    }

    _fetchTaxiNews = () => {

        return fetch('http://127.0.0.1:8000/fetch_taxi',{
            method: 'GET',
            mode: 'cors',
            crossDomain: true
        })
        .then((response)=>{
            return response.json();
        })
        .catch(err => console.log(err));
    }

    //API통신 2 : 비동기식으로 지정해주고, data_for_state으로 state에 들어갈 데이터를 별도 object로 저장해주고
    //state에 target_data로 저장함
    _getNews = async () => {
        const data_for_state_uber = await this._fetchUberNews()
        const data_for_state_kakao = await this._fetchKakaoNews()
        const data_for_state_taxi = await this._fetchTaxiNews()

        this.setState({
            uber: data_for_state_uber,
            kakao : data_for_state_kakao,
            taxi: data_for_state_taxi
        })
    }

    //API통신 3 : 페이지 자체가 
    //Mount하고 있는 과정이므로 그 이전에 console.log 하면 state에 찍히지 않는다 => 주의!
    componentDidMount(){
        this._getNews();
    }

    _renderUberNews = () => {
        const uber_news = this.state.uber.map((news, index) => {
            //return해줄 떄 key를 넣어서 구분할 수 있도록 해줘야 함
            return <News
                title = {news.title}
                url = {news.url}
                key={index}
            />
        })
        return uber_news
    }

    _renderKakaoNews = () => {
        const kakao_news = this.state.kakao.map((news, index) => {
            //return해줄 떄 key를 넣어서 구분할 수 있도록 해줘야 함
            return <News
                title = {news.title}
                url = {news.url}
                key={index}
            />
        })
        return kakao_news
    }

    _renderTaxiNews = () => {
        const taxi_news = this.state.taxi.map((news, index) => {
            //return해줄 떄 key를 넣어서 구분할 수 있도록 해줘야 함
            return <News
                title = {news.title}
                url = {news.url}
                key={index}
            />
        })
        return taxi_news
    }

    //Conditional Rendering
    render() {
        if (this.props.query=='uber'){
            return (
                <div>
                <Box>
                    <TitleArea>{this.props.title}</TitleArea>
                    
                    <div className='News__Content__Part'>
                        { this.state.uber ? this._renderUberNews() : 'Loading...' }
                    </div>
                </Box>
                </div>
            )
        }

        else if (this.props.query=='kakao'){
            return (
                <div>
                <Box>
                    <TitleArea>{this.props.title}</TitleArea>
                    
                    <div className='News__Content__Part'>
                        { this.state.uber ? this._renderKakaoNews() : 'Loading...' }
                    </div>
                </Box>
                </div>
            )
        }


        else if (this.props.query=='taxi'){
            return (
                <div>
                <Box>
                    <TitleArea>{this.props.title}</TitleArea>
                    
                    <div className='News__Content__Part'>
                        { this.state.uber ? this._renderTaxiNews() : 'Loading...' }
                    </div>
                </Box>
                </div>
            )
        }

        else {
            return (
                <div>
                    "Loading"
                </div>
            ) 
        }

    }

};

export default ContentWrapper;