import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecommendSection from "../components/Store/RecommendSection";
import * as s from "./style/StoreStyle";
import { Data } from "../Data/Store_Main1";
import { Data2 } from "../Data/Store_Main2";
import StoreDetail from "../components/Store/StoreDetail";


const category = [
    {title : '키즈' , img : '/img/Rectangle 2959.png'},
    {title : '시니어' , img : '/img/Rectangle 2960.png'},
    {title : '보험' , img : '/img/Rectangle 2961.png'},
    {title : '학원' , img : '/img/Rectangle 2962.png'},
    {title : '생필품' , img : '/img/Rectangle 2963.png'},
    {title : '반려동물' , img : '/img/Rectangle 2964.png'},
    {title : '헬스케어' , img : '/img/Rectangle 2965.png'},
    {title : '기부' , img : '/img/Rectangle 2966.png'},
]

const BaseURL = 'https://paytalk.github.io/Paytalk_webview';

const StoreContainer = () => {
    const [index,setIndex] = useState(0);
    const [detail,setDetail] = useState(false);
    const nav = useNavigate();

    

    return(
        <>
        <s.StoreContainerWrap>
            <s.StoreContainerArea>
            <s.StoreContainerTitle>스토어</s.StoreContainerTitle>
            <s.StoreContainerCategory>카테고리</s.StoreContainerCategory>
            <s.StoreContainerThe>더보기</s.StoreContainerThe>
            <s.StoreCategoryBox>
                <s.StoreCategoryUl>
                    {category.map((index,key)=>
                        <s.StoreCategoryLi onClick={()=>{
                            setIndex(key)
                            setDetail(true)
                        }}>
                        <s.StoreCategoryImg>
                            <img src={`${BaseURL}`+ index.img} alt="카테고리 이미지" key={key} />
                        </s.StoreCategoryImg>
                        <s.StoreCategoryTitle key='title'>{index.title}</s.StoreCategoryTitle>
                        </s.StoreCategoryLi>
                    )}
                </s.StoreCategoryUl>
            </s.StoreCategoryBox>
            <s.Gubun></s.Gubun>
            <RecommendSection
            title={Data.data.market1_title}
            data={Data.data.product}
            ></RecommendSection>
            <s.Gubun></s.Gubun>
            <RecommendSection
            title={Data2.data.market2_title}
            data={Data2.data.product}
            ></RecommendSection>
            </s.StoreContainerArea>
        </s.StoreContainerWrap>
        {detail ? <StoreDetail index={index} setDetail={setDetail} /> : ""}
        </>
    )
}

export default StoreContainer;