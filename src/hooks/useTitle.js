import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - avijatrik`;
    }, [title])
};

export default useTitle;