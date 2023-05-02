export const paragraphs = (description) => {
    return description.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>);
}