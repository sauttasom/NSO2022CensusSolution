function Footer() {
    return (
        <div>
            <hr/>
            <div className="p-4 text-center footer" id="section-contact">
                <h3><i className='bx bx-white bxs-message-detail display-4' ></i> ติดต่อเรา</h3>
                <h4><span>สำนักงานสถิติแห่งชาติ</span></h4>
                <span><i className='bx bx-white bxs-building-house'></i> ศูนย์ราชการเฉลิมพระเกียรติ 80 พรรษา</span>
                <br />
                <span>อาคารรัฐประศาสนภักดี ชั้น 2 ถนนแจ้งวัฒนะ เขตหลักสี่ กรุงเทพมหานคร 10210</span>
                <br />
                <span><i className='bx bx-white bxs-phone-call'></i> โทรศัพท์ 08-2760-0738  , 08-2760-0746 , 08-2760-0759 , 08-2760-0765 , 08-2760-0771 </span>
                <br />
                <span><i className='bx bx-white bxs-chat' ></i> ข้อเสนอแนะ-ปัญหาการใช้งานระบบ : agrc_census@nso.go.th</span>
                <br/>
                <label className={process.env.REACT_APP_SYSTEM_COLOR}>{process.env.REACT_APP_SYSTEM}</label>
            </div>
        </div>
    );
}

export default Footer;