export function Profile(){
    return(
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" />
    )
  };
  
  export default function Gallery(){
    return(
      <section>
        <h1>My Gallery</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  