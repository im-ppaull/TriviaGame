import { useState } from "react"
import Header from "./components/Header"
import type { Tab } from "./types/tabs"
import Introduction from "./components/Introduction";

const App = () => {
    const [tab, setTab] = useState<Tab>('introduction');

    return (
        <div className="px-[350px] py-3">
            <Header />

            {tab === 'introduction' && <Introduction />}
        </div>
    )
}

export default App