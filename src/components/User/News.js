import React, { Component } from 'react';
import styled from 'styled-components';
import LineEllipsis from 'react-lines-ellipsis'


const NewsBox = styled.div`
    padding-left: 10px;
    width: 450px;
    height: 60px;
`;

const TitleField = styled.div`
    font-family: 'FF Clan';
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 7px;
    
`;

const UrlField = styled.div`
    font-family: 'FF Clan';
    font-size: 12px;

`;

function News({title, url}){
    return(
        <div>
            <NewsBox>
                <TitleField>
                    <LineEllipsis
                    text = { title }
                    maxLine = '1'
                    ellpsis = '...'
                    trimRight
                    basedOn = 'letters'
                    />
                </TitleField>
                <UrlField>
                    <a href={ url }>기사보기</a>
                </UrlField>
            </NewsBox>
        </div>
    )
}


export default News;