import React from "react";
import { Select } from "antd";

const { Option } = Select;

const categories = [
    "True Crime",
    "Comedy",
    "Sports",
    "Fiction",
    "History",
    "Business",
    "Society and Culture",
    "Kids & Family",
    "Education",
    "News",
    "Religion and Spirituality",
    "TV & Movies",
    "Technology",
    "Arts",
    "Health and Fitness",
    "Music",
    "Science",
    "Leisure",
    "Government"
]

const tags = [
    "Programmering",
    "Hårdvara",
    "Sports",
    "Fiction",
    "History",
    "Business",
    "Society and Culture",
    "Kids & Family",
    "Education",
    "News",
    "Religion and Spirituality",
    "TV & Movies",
    "Technology",
    "Arts",
    "Health and Fitness",
    "Music",
    "Science",
    "Leisure",
    "Government"
]

const children = [];
for (let i = 10; i < categories.length; i++) {
    children.push(<Option key={categories[i]}>{categories[i]}</Option>);
}

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class TagPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, }
    }

    render() {
        let listData = this.props.categories ? categories : tags;

        return (
            <Select
                mode="multiple"
                style={{ margin: "10px 0", width: "100%" }}
                placeholder={this.props.placeholder}
                onChange={(e) => this.props.onChange(e)}
            >
                {children}
            </Select>)
    }
}
