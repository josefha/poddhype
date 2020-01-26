import React from "react";

import PageWrapper from '../../common/components/PageWrapper/PageWrapper'
import PodcastersPart from '../../common/components/PodcastersPart/PodcastersPart'
import SEO from '../../common/components/seo'

import './style.less';
import '../Home/static/header.less'

const Podcasters = (props) => {
    return (
        <PageWrapper footer={true}>
            <SEO
                title="Poddhype | Hitta sponsorer till din podcast."
                description="Dina lyssnare är värdefulla, vi hjälper dig ta betalt för din nichade målgrupp genom en bra sponsor matchning."
            />
            <PodcastersPart />
        </PageWrapper >
    )
}

export default Podcasters
