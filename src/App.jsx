import './App.css'
import Image from './Image.jsx'
function App() {

  return (
    <div>
    <h1> Favorite Cartoon: 
      <span className="custom-title">Regular Show</span>
    </h1>
      <div className="gallery">
      <Image src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/the_regular_park_gang_1.jpg" width="380"/>
      <Image src="https://imgs.search.brave.com/Bi0tNS__lYra4kLaaU_w6-_tOSflUIVpoHhbUmDvP30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcmVn/dWxhci1zaG93LTE5/MjAteC0xMDgwLWJh/Y2tncm91bmQtbjFu/emptc2lhamoxaTBl/Zy5qcGc" width="380"/>
      <Image src="https://imgs.search.brave.com/KtXqfTCdBgXhPzvjdRA6Y5YyAUDr2RTNHyd8NaQUPco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvdmx1Ynhh/Z3I4MWNmMS5wbmc" width="380"/>
      <Image src="https://imgs.search.brave.com/T3WTXr43momfeGiruHy-nKaU022LrWmOlLVYTtmfIkc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdHMteW91ci1m/YXYtcmVndWxhci1z/aG93LWNoYXJhY3Rl/ci1kLXYwLXdlcDMx/Z3lqbjNrYjEucG5n/P3dpZHRoPTY0MCZj/cm9wPXNtYXJ0JmF1/dG89d2VicCZzPTRh/MmQ3OTI3ZWZjNjFl/MGJlYmM2M2Q4M2Rl/NzM2YTViY2RiMmZl/NmE" width="380"/>
    </div>
   </div>
  );
}

export default App
