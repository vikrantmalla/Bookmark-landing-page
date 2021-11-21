import React from 'react'
import ExtensionButton from '../utillits/ExtensionButton'
import extensionApi from '../api/extensionApi'

const Extension = () => {
    return (
        <>
            {extensionApi.map((curElem) => {
                const { id, browserImg, imgAlt, browserName, version } = curElem;
                return (
                    <div className="browser-card" key={id}>
                        <img src={browserImg} alt={imgAlt} />
                        <div className="extension-add">
                            <h3>{browserName}</h3>
                            <p>{version}</p>
                            <ExtensionButton />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Extension
