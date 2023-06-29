import {
    HuggingFace,
    digits_detection
} from "../../assets";

const digitsDetection = {
    name: "YOLOv8 digits detection",
    description:
        "Handwritten digits detection using a YOLOv8 model trained on a custom dataset",
    image: digits_detection,
    tags: ["app", "DL", "object-detection", "image"],
    github_name: "yolov8-digits-detection",
    app_url: "https://huggingface.co/spaces/thawro/yolov8-digits-detection",
    app_icon: HuggingFace,
    content: null,
    demo: <div style={{ width: '100%', height: '600px' }}>
        <iframe
            src="https://thawro.github.io/web-object-detector/"
            title="YOLO v8 digits detection app">
        </iframe>
    </div>
}

export default digitsDetection