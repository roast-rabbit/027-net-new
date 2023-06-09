import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// 首页  公司介绍  主营业务  通知公告  财务通道  联系我们

function NavLinks({ classes, isMoble, onClick }) {
  if (isMoble) {
    const classNames = `z-10 backdrop-blur-md flex flex-col fixed top-20 bottom-0 w-screen bg-white space-y-4 md:flex-row items-center ${classes}`;
    return ReactDOM.createPortal(
      <ul
        style={{ backgroundColor: "rgb(255 255 255 / 65%)" }}
        onClick={onClick}
        className={classNames}
      >
        <li className="cursor-pointer">
          <Link className="px-3" to="/">
            <div>首页</div>
          </Link>
        </li>
        <li className="cursor-pointer px-3">公司介绍</li>
        <li className="cursor-pointer px-3">主营业务</li>
        <li className="cursor-pointer px-3">
          <Link to="/announcements">通知公告</Link>
        </li>
        <li className="cursor-pointer px-3">财务通道</li>

        <button className="self-center w-4/5 px-4 py-2 font-semibold rounded bg-blue-600 text-white">
          联系我们
        </button>
      </ul>,
      document.querySelector(".modal-container")
    );
  } else {
    return (
      <ul className="list-none flex flex-row space-x-3 lg:space-x-3 justify-between">
        <li
          style={{ writingMode: "horizontal-tb" }}
          className="cursor-pointer px-2 lg:px-4 py-2 border-2 border-transparent rounded-md hover:border-blue-800"
        >
          <Link to="/">首页</Link>
        </li>
        <li className="cursor-pointer px-2 lg:px-4 py-2 border-2 border-transparent rounded-md hover:border-blue-800">
          <Link to="/about">公司介绍</Link>
        </li>
        <li className="cursor-pointer px-2 lg:px-4 py-2 border-2 border-transparent rounded-md hover:border-blue-800">
          主营业务
        </li>
        <li className="cursor-pointer px-2 lg:px-4 py-2 border-2 border-transparent rounded-md hover:border-blue-800">
          <Link to="/announcements">通知公告</Link>
        </li>
        <li className="cursor-pointer px-2 lg:px-4 py-2 border-2 border-transparent rounded-md hover:border-blue-800">
          财务通道
        </li>
        <button className="self-center px-6 py-2 font-semibold rounded bg-blue-600 text-white hover:bg-blue-800">
          <Link to="/contact">联系我们</Link>
        </button>
      </ul>
    );
  }
}

export default NavLinks;
