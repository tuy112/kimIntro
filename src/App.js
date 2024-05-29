import './App.css';

function App() {
  return (
    <div id="wrap">
      {/* header */}
      <header id='header'>
        <h1>Jstory<span>Kim Jae Hyeok</span></h1>
        <div class="search" onclick="search();"><i class="xi-search"></i></div>
      </header>

      {/* main */}
      <section id='container' className='main'>
        <div className='content'>
          {/* main - i1 */}
          <div className='introduce i1'>
            <div className='profile'>
              <div className='profileWrite'>
                <img className='profileImg' src='images/profile.jpg' alt='profileImage' />
                <p className='name'>김재혁 초급개발자</p>
                <p className='work'>React+Node.js+Java</p>
              </div>
              <ul className='quickRemote'>
                <li><a href='https://tuy112.github.io/'>홈페이지</a></li>
                <li><a href='https://github.com/tuy112'>깃허브</a></li>
                <li><a href='https://www.youtube.com/channel/UCIUZejYbHXZOHhwUokcRBUQ'>유튜브</a></li>
              </ul>
            </div>
            <div className='profileRemote'>
              <table className='sideTable'>
                <tr>
                  <td>
                    <a href='#'>
                      <img src='' alt=''/>
                      <p>1</p>
                    </a>
                  </td>
                  <td>
                    <a href='#'>
                      <img src='' alt=''/>
                      <p>2</p>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href='#'>
                      <img src='' alt=''/>
                      <p>1</p>
                    </a>
                  </td>
                  <td>
                    <a href='#'>
                      <img src='' alt=''/>
                      <p>2</p>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href='#'>
                      <img src='' alt=''/>
                      <p>1</p>
                    </a>
                  </td>
                  <td>
                    <a href='#'>
                      <img src='' alt=''/>
                      <p>2</p>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href='#'>
                      <img src='' alt=''/>
                      <p>1</p>
                    </a>
                  </td>
                  <td>
                    <a href='#'>
                      <img src='' alt=''/>
                      <p>2</p>
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          
          {/* main - i2 */}
          <div className='introduce i2'>
            <table className='remoteTable'>
              <tr>
                <td>PROFILE</td>
                <td>PROJECT</td>
                <td>5</td>
              </tr>
              <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
              </tr>
            </table>
          </div>
          {/* main - i3*/}
          <div className='introduce i3'>
            <div className='notice'>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
