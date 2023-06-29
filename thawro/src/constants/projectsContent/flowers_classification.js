import {
    flowers_classification,
    HuggingFace,
} from "../../assets";

const flowersClassification = {
    name: "Flowers classification",
    description:
        "Classification of 102 flower species using CNN.",
    image: flowers_classification,
    tags: ["app", "DL", "classification", "image"],
    github_name: "flowers-102-classification",
    app_url: "https://huggingface.co/spaces/thawro/flowers-102-classification",
    app_icon: HuggingFace,
    content: null,
    demo: <gradio-app space="thawro/flowers-102-classification"></gradio-app>
}

export default flowersClassification