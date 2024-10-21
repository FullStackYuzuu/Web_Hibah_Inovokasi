<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Exclude the following routes from the admin authentication check
        if (
            $request->is('admin-login') ||
            $request->is('auth/google/*') ||
            $request->is('admin/logout') ||
            !$request->is('admin*')
        ) {
            // Allow access to admin login, Google auth routes, admin logout, and all non-admin routes
            return $next($request);
        }

        // Check if the user is not logged in or is not an admin
        if (!Auth::check() || !Auth::user()->is_admin) {
            // Redirect to the admin login page if the user is not authenticated or not an admin
            return redirect('/admin-login');
        }

        return $next($request);
    }
}
