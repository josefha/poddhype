import React from "react";
import PageWrapper from '../common/components/PageWrapper/PageWrapper'
import { Result } from 'antd';
import { navigate } from 'gatsby'
import { DefaultButton } from '../common/components/Buttons'


export default function PageNotFound() {
    return <PageWrapper>
        <div className="page" >
            <div className="wrapper-content-box">
                <Result
                    status="404"
                    title="404"
                    subTitle="Ledsen, sidan du leter efter existerar inte"
                    extra={<DefaultButton
                        title="Gå till startsidan"
                        id="goToStartPage"
                        onClick={() => navigate('/')}>
                    </DefaultButton>}
                />
            </div>
        </div>
    </PageWrapper>
}
