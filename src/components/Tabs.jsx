import React, { useState } from 'react'
import FaqButton from '../utillits/FaqButton'
export default function Tabs() {

    const [currentTab, setCurrentTab] = useState('tab1');
    const tabList = [
        {
            name: 'tab1',
            label: 'Simple Bookmarking',
            content: (
                <div className="tab-content">
                        <img src="images/illustration-features-tab-1.svg" alt="tab-1" />
                    <div className="tab-info">
                    <h2>Bookmark in one click</h2>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                    <FaqButton/>
                    </div>
                 
                </div>
            )
        },
        {
            name: 'tab2',
            label: 'Speedy Searching',
            content: (
                <div className="tab-content">

                        <img src="images/illustration-features-tab-2.svg" alt="tab-2" />
 
                    <div className="tab-info">
                    <h2>Intelligent search</h2>
                    <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                    <FaqButton/>
                    </div> 
                </div>
            )
        },
        {
            name: 'tab3',
            label: 'Easy Sharing',
            content: (
                <div className="tab-content">

                        <img src="images/illustration-features-tab-3.svg" alt="tab-3" />

                    <div className="tab-info">
                    <h2>Share your bookmarks</h2>
                    <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                    <FaqButton/>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="tabs-container">

            <div className="tabs-header">
                {
                    tabList.map((tab, i) => (
                        <label key={i} onClick={() => setCurrentTab(tab.name)} className={(tab.name === currentTab) ? 'active' : ''}>
                            {tab.label}
                        </label>
                    ))
                }
            </div>

            {
                tabList.map((tab, i) => {
                    if (tab.name === currentTab) {
                        return <div key={i}>{tab.content} </div>;
                    } else {
                        return null;
                    }
                })
            }
        </div>
    )
}
