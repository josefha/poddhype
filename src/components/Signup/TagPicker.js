import React from "react";
import { Select } from "antd";

const { Option } = Select;

const categories = [
    "Konst & Kultur",
    "Utbildning",
    "Nyheter",
    "Teknologi",
    "Fritid",
    "Komedi & Humor",
    "Barn & Familj",
    "Tv & Film",
    "Skönlitteratur",
    "Vetenskap",
    "Samhälle & Kultur",
    "Verkliga Brott",
    "Musik",
    "Historia",
    "Hälsa & Motion",
    "Näringsliv",
    "Religion & Andlighet",
    "Myndighet & Organiation",
    "Sport"
]

const subCategories = {
    "Konst & Kultur": ["Mat", "Mode & Skönhet", "Design", "Visuell Konst"],
    "Utbildning": [],
}

const categoriesOptions = [];
for (let i = 10; i < categories.length; i++) {
    categoriesOptions.push(<Option value={categories[i]}>{categories[i]}</Option>);
}

const children = [];
for (let i = 10; i < categories.length; i++) {
    children.push(<Option key={categories[i]}>{categories[i]}</Option>);
}

export default class TagPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, }
    }

    render() {
        return (
            this.props.categories ?
                <Select
                    style={{ margin: "10px 0", width: "100%" }}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.props.onChange(e)}
                >
                    {categoriesOptions}
                </Select>
                :
                < Select
                    mode="multiple"
                    style={{ margin: "10px 0", width: "100%" }}
                    value={this.props.value}
                    showArrow={true}
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.props.onChange(e)}
                >
                    {children}
                </Select >)
    }
}
