import Head from "next/head";
import React, {useEffect, useRef, useState} from "react";

export default function Review() {
    // Create a ref for the div element
    const textDivRef = useRef<HTMLDivElement>(null);
    const [productInput, setProductInput] = useState("");
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    // Add a click event listener to the copy icon that copies the text in the div to the clipboard when clicked
    useEffect(() => {
        const copyIcon = document.querySelector(".copy-icon");
        if (!copyIcon) return;
        copyIcon.addEventListener("click", () => {
            const textDiv = textDivRef.current;

            let text;
            if (textDivRef.current) {
                text = textDivRef.current.textContent;
            }

            // Create a hidden textarea element
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);

            // Select the text in the textarea
            textArea.select();

            // Copy the text to the clipboard
            document.execCommand("copy");

            // Remove the textarea element
            document.body.removeChild(textArea);
        });
    }, []);


    async function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        const response = await fetch("/api/review", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({value: productInput}),
        });
        const data = await response.json();

        let rawResult = data.result;

        setResult(rawResult);
        setProductInput("");
        setIsLoading(false);
    }

    return (
        <div>
            <Head>
                <title>OpenAI API Starter - completion generator</title>
                <meta name="description" content=""/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main
                className="flex flex-col
                    items-center justify-center m-20"
            >
                <h3 className="text-slate-900 text-xl mb-3">
                    Code completion starter kit
                </h3>

                <form onSubmit={onSubmit}>
                    <input
                        className="text-sm text-gray-base w-full
                              mr-3 py-5 px-4 h-2 border
                              border-gray-200 rounded mb-2"

                        type="text"
                        name="product"
                        placeholder="Enter a product name"
                        value={productInput}
                        onChange={(e) => setProductInput(e.target.value)}
                    />

                    <button
                        className="text-sm w-full bg-fuchsia-600 h-7 text-white
                              rounded-2xl mb-10"
                        type="submit"
                    >
                        Generate completion
                    </button>
                </form>
                {isLoading ? (
                    <p>Loading...</p>
                ) : result ? (
                    <div className="relative w-2/4 ">
                        <div
                            ref={textDivRef}
                            className="rounded-md border-spacing-2 border-slate-900 bg-slate-100 break-words max-w-500 overflow-x-auto  "
                        >
              <code>
                {result.map(res => res.text)}
              </code>
                        </div>

                    </div>
                ) : null}
            </main>
        </div>
    );
}


