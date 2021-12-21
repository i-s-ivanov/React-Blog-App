import Sidebar from '../../components/Sidebar/Sidebar';
import './Setting.css';

const Setting = () => {
    return (
        <div className='setting'>
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display: "none"}} />
                        
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Iskren'/>
                    <label>Email</label>
                    <input type="email" placeholder='Iskren@abv.bg'/>
                    <label>Password</label>
                    <input type="password" placeholder='Password'/>
                    <button className='settingSubmit'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
};

export default Setting;
