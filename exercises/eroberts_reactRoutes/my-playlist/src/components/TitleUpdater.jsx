import { useEffect } from "react";

const TitleUpdater = ({ title, children }) => {
    useEffect(() => {
        if (title) document.title = title;
    }, [title]);

    // render children so this can wrap page elements
    return children;
};

export default TitleUpdater;