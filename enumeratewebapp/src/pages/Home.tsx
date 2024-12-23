import React from "react";

function Home() {
    return (
        <div>
            <div className="container-xxl">
                <div className="misc-wrapper">
                    <div className="mb-4">
                        <img src={process.env.PUBLIC_URL + "/assets/img/logo/nso-logo.png"} width="280" alt=""  className="logo"/>
                        <img src={process.env.PUBLIC_URL + "/assets/img/logo/doae-logo.png"} width="180" alt="" className="logo"/>
                    </div>
                    <h1 className="mb-2 mx-2">ระบบสำมะโนเกษตร ปี พ.ศ.2566</h1>
                    <h2 className="mb-4 mx-2 text-muted">(สำมะโนทดลอง)</h2>
                    <a href={process.env.PUBLIC_URL + "/login"} className="btn btn-primary">ลงชื่อเข้าใช้งานระบบ</a>
                    
                </div>
            </div>

        </div>
    );
}

export default Home;