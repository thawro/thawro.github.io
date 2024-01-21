import {
    HuggingFace,
    digits_detection
} from "../../assets";

const medSalary = {
    name: "Med Salary",
    description: "Med salary calculator",
    image: digits_detection,
    tags: ["app"],
    github_name: "",
    app_url: "https://huggingface.co/spaces/thawro/med-salary",
    app_icon: HuggingFace,
    content: null,
    demo: <div style={{ width: '100%', height: '600px' }}>
        <iframe
            src="https://thawro.github.io/med-salary/"
            title="Med salary calculator">
        </iframe>
    </div>
}

export default medSalary