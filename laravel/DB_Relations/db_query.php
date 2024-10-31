<?php

// old style 
$user = User::where(function ($query) use ($request) {
    $query->where('email', $request->loginInput)
          ->orWhere('mobile', $request->loginInput);
})->first();
// shortcut
$user = User::where('email', $request->loginInput)->first() ?: User::where('mobile', $request->loginInput)->first();
