import React, { useEffect } from 'react';
import AdminLoginButton from '../components/AdminLoginButton';

const AdminLoginPage = () => {
    useEffect(() => {
        const loadGoogleSignIn = () => {
            if (window.google) {
                window.google.accounts.id.initialize({
                    client_id: "728238636119-dk6spff6mb8nnrel7hmsv8v3gfvfrhvj.apps.googleusercontent.com",
                    callback: handleCredentialResponse
                });
                window.google.accounts.id.renderButton(
                    document.getElementById("g_id_signin"),
                    { theme: "outline", size: "large" } // Sesuaikan parameter sesuai kebutuhan
                );
            }
        };

        const handleCredentialResponse = (response) => {
            console.log("Encoded JWT ID token: " + response.credential);

            // Kirim token ke server menggunakan fetch atau axios untuk diverifikasi
            fetch('/auth/google/callback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({ token: response.credential })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        // Redirect ke halaman admin setelah verifikasi sukses
                        window.location.href = '/admin';
                    } else {
                        // Jika verifikasi gagal, redirect ke halaman login
                        window.location.href = '/admin-login';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Redirect ke halaman login jika terjadi kesalahan
                    window.location.href = '/admin-login';
                });
        };


        // Memastikan script Google Sign-In SDK sudah terpasang
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.onload = loadGoogleSignIn;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-orange-500 text-white">
            <div className="flex flex-col items-center px-4 lg:px-0">
                <div className="flex flex-col items-center">
                    <h1 className="font-black text-5xl sm:text-7xl md:text-9xl">ADMIN</h1>
                    <h2 className="font-black text-xl sm:text-2xl md:text-3xl mt-4">LOGIN PAGE</h2>
                </div>

                <div className="mt-8 p-4 flex items-center bg-orange-600 rounded-[2rem] w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto md:h-56">
                    <div className="flex items-center justify-center ml-0 md:ml-[18px] bg-orange-700 rounded-[2rem] w-full h-auto md:w-[570px] md:h-[185px]">
                        <div id="g_id_signin"></div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex absolute inset-y-0 left-0">
                <div className="h-full w-40 xl:w-64 bg-orange-600 flex flex-col justify-around items-center">
                </div>
            </div>

            <div className="hidden lg:flex absolute inset-y-0 right-0">
                <div className="h-full w-40 xl:w-64 bg-orange-600 flex flex-col justify-around items-center">
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
