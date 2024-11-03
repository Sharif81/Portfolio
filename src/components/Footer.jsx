import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 py-10 rounded">
                <div className="container mx-auto text-center">
                    <div className="flex flex-col lg:flex-row justify-between items-center text-center">
                        <div>
                            <p className=" text-white">
                                Copyright © 2024 <a href="#home" className="font-medium text-primary">Sharif Ahmed Alif</a>. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer