const SUPABASE_URL = "https://pjkzxrbjnrarhglwecwq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqa3p4cmJqbnJhcmhnbHdlY3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxNTM2NjEsImV4cCI6MjA3MjcyOTY2MX0.pPrx6Ud20Zt2hcuxGaBm45f2rwADfGgokqt16zHXhrI";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


const btn = document.getElementById('genBtn');
const authar = document.getElementById('auth');
const para = document.getElementById('para');

btn.addEventListener('click', async () => {

    const { data, error } = await supabase.from('quotes').select('*');

    if (error) {
        alert(error.message);
    }
    console.log(" --> ", data);

    const randomInd = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomInd];

    para.innerHTML = randomQuote.text;
    authar.innerHTML = `- ${randomQuote.author}`;

})