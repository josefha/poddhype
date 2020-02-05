import React from "react";
import cnLocale from '../../zh-CN'
import PageWrapper from '../../common/components/PageWrapper/PageWrapper'
import SEO from '../../common/components/seo'
import { ButtonTransparent } from '../../common/components/Buttons/index.js'
import { Input, Divider } from 'antd'
import { getFirebase } from "../../common/api/firebase"
import { Link } from 'gatsby'
import './style.less';
import '../Home/static/header.less'

class Brands extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firebase: null
        };
    }

    loadFirebase = () => {
        const app = import("firebase/app");
        const db = import("firebase/firestore");
        const analytics = import("firebase/analytics");

        Promise.all([app, db, analytics]).then(([firebase]) => {
            const fb = getFirebase(firebase)
            fb.analytics()
            this.setState({ firebase: fb })
        })
    }

    componentDidMount() {
        this.loadFirebase()
    }

    render() {
        return (
            <div>
                <SEO
                    title="Poddhype | Login"
                    description="Logga in för att se vilka sponsorer som vill nå dig."
                />
                <PageWrapper footer={true}>
                    <div>
                        <h1>LOGIN</h1>
                    </div>
                </PageWrapper>
            </div >
        )
    }
}

export default Brands
