
const ArticleCard = () => {
  return (
    <div className="d-flex flex-column border border-1 rounded-2" style={{ maxWidth: '692px', borderColor: 'rgb(224, 224, 224)', fill: 'rgb(255, 255, 255)' }}>
      <img src="/assets/nature-rDsfVg8l.jpg" alt="Nature" className="imagePost" />
      <div className="p-4">
        <h3 className="d-flex">✍️ Article</h3>
        <div className="d-flex gap-6 justify-content-between">
          <h4>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
          <div className="btn align-self-start">
            <div className="dropdown">
              <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img
                  src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-more_vert-24px'%3e%3cpath%20id='Vector'%20d='M18.6667%2014C18.6667%2015.2833%2019.7167%2016.3333%2021%2016.3333C22.2833%2016.3333%2023.3333%2015.2833%2023.3333%2014C23.3333%2012.7166%2022.2833%2011.6666%2021%2011.6666C19.7167%2011.6666%2018.6667%2012.7166%2018.6667%2014ZM16.3333%2014C16.3333%2012.7166%2015.2833%2011.6666%2014%2011.6666C12.7167%2011.6666%2011.6667%2012.7166%2011.6667%2014C11.6667%2015.2833%2012.7167%2016.3333%2014%2016.3333C15.2833%2016.3333%2016.3333%2015.2833%2016.3333%2014ZM9.33333%2014C9.33333%2012.7166%208.28333%2011.6666%207%2011.6666C5.71666%2011.6666%204.66666%2012.7166%204.66666%2014C4.66666%2015.2833%205.71666%2016.3333%207%2016.3333C8.28333%2016.3333%209.33333%2015.2833%209.33333%2014Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e"
                  alt="more details" height="28px" width="28px"
                />
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" type="button">Edit</button></li>
                <li><button className="dropdown-item" type="button">Report</button></li>
                <li><button className="dropdown-item" type="button">Option 3</button></li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="d-flex align-items-center gap-5 list-unstyled "><li className="d-flex align-items-center gap-1"><img src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-work_outline-24px'%20clip-path='url(%23clip0_1_941)'%3e%3cpath%20id='Vector'%20d='M11.6667%205.00008V3.33341H8.33342V5.00008H11.6667ZM3.33341%206.66675V15.8334H16.6667V6.66675H3.33341ZM16.6667%205.00008C17.5917%205.00008%2018.3334%205.74175%2018.3334%206.66675V15.8334C18.3334%2016.7584%2017.5917%2017.5001%2016.6667%2017.5001H3.33341C2.40841%2017.5001%201.66675%2016.7584%201.66675%2015.8334L1.67508%206.66675C1.67508%205.74175%202.40841%205.00008%203.33341%205.00008H6.66675V3.33341C6.66675%202.40841%207.40841%201.66675%208.33342%201.66675H11.6667C12.5917%201.66675%2013.3334%202.40841%2013.3334%203.33341V5.00008H16.6667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_941'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="date" width="20px" height="20px" />Innovaccer Analytics Private Ltd.</li><li className="d-flex align-items-center gap-1"><img src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-location_on-24px%202'%20clip-path='url(%23clip0_1_1233)'%3e%3cpath%20id='Vector'%20d='M9%201.5C6.0975%201.5%203.75%203.8475%203.75%206.75C3.75%2010.6875%209%2016.5%209%2016.5C9%2016.5%2014.25%2010.6875%2014.25%206.75C14.25%203.8475%2011.9025%201.5%209%201.5ZM5.25%206.75C5.25%204.68%206.93%203%209%203C11.07%203%2012.75%204.68%2012.75%206.75C12.75%208.91%2010.59%2012.1425%209%2014.16C7.44%2012.1575%205.25%208.8875%205.25%206.75Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M9%208.625C10.0355%208.625%2010.875%207.78553%2010.875%206.75C10.875%205.71447%2010.0355%204.875%209%204.875C7.96447%204.875%207.125%205.71447%207.125%206.75C7.125%207.78553%207.96447%208.625%209%208.625Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1233'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="location" width="20px" height="20px" />Noida, India</li></ul>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_895)">
            <path d="M15.8333 2.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167 2.49992 2.50833 3.24992 2.50833 4.16659L2.5 15.8333C2.5 16.7499 3.24167 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM15.8333 15.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333 8.33325H10V12.4999H5.83333V8.33325Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_1_895">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img className="rounded-circle" alt="Profile" src="/assets/user1-COSOQoOX.jpg" width="48" height="48" />
            <div className="d-flex flex-column">
              <div className="text-wrapper">Siddharth Goyal</div>
              <div className="d-lg-none">
                <img
                  src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'/%3e%3c/g%3e%3c/svg%3e"
                  alt="watch" />
                <span>1.4k views</span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-none d-lg-block pe-4">
              <img
                src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'/%3e%3c/g%3e%3c/svg%3e"
                alt="watch" />
              <span>1.4k views</span>
            </div>
            <button className="btn d-flex align-items-center gap-2" style={{ background: 'rgb(237, 238, 240)' }}>
              <img
                src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-share-24px'%20clip-path='url(%23clip0_1_1104)'%3e%3cpath%20id='Vector'%20d='M13.5%2012.06C12.93%2012.06%2012.42%2012.285%2012.03%2012.6375L6.6825%209.525C6.72%209.3525%206.75%209.18%206.75%209C6.75%208.82%206.72%208.6475%206.6825%208.475L11.97%205.3925C12.375%205.7675%2012.9075%206%2013.5%206C14.745%206%2015.75%204.995%2015.75%203.75C15.75%202.505%2014.745%201.5%2013.5%201.5C12.255%201.5%2011.25%202.505%2011.25%203.75C11.25%203.93%2011.28%204.1025%2011.3175%204.275L6.03%207.3575C5.625%206.9825%205.0925%206.75%204.5%206.75C3.255%206.75%202.25%207.755%202.25%209C2.25%2010.245%203.255%2011.25%204.5%2011.25C5.0925%2011.25%205.625%2011.0175%206.03%2010.6425L11.37%2013.7625C11.3325%2013.92%2011.31%2014.085%2011.31%2014.25C11.31%2015.4575%2012.2925%2016.44%2013.5%2016.44C14.7075%2016.44%2015.69%2015.4575%2015.69%2014.25C15.69%2013.0425%2014.7075%2012.06%2013.5%2012.06Z'%20fill='%232D2D2D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1104'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                alt="share" />
              <span className="d-lg-none">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
