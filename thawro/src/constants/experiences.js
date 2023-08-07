import {
    bonasoft,
    mxlabs,
    vestigit
} from "../assets";


const experiences = [
    {
        title: "Python Developer",
        company_name: "Bonasoft",
        icon: bonasoft,
        iconBg: "#aa1326",
        date: "March 2021 - July 2021",
        points: [
            <>REST API backend for a website</>,
            <>Unit tests for REST API</>
        ],
    },
    {
        title: "Machine Learning Engineer",
        company_name: "MX Labs",
        icon: mxlabs,
        iconBg: "#ffffff",
        date: "July 2021 - July 2023",
        points: [
            <>Versatile research on face video based blood pressure estimation</>,
            <>Feature extraction algorithms for the PPG signal</>,
            <>ML models optimization with AutoML approaches</>,
            <>Implementation of multimodal Deep Neural Networks for blood pressure estimation (modalities: bio signals, face video, metadata)</>,
            <>Implementation of lightweight CNN architectures for metadata extraction based on the face image</>,
            <>Models productization - from PyTorch research phase to ONNX model applicable in C++</>
        ],
    },
    {
        title: "Artificial Intelligence Engineer",
        company_name: "Vestigit",
        icon: vestigit,
        iconBg: "#000000",
        date: "July 2023 - Present",
        points: [
            <>Versatile research on classical and DL approaches for efficient saliency map estimation and DL-based watermarking solutions</>,
        ],
    },
];

export default experiences