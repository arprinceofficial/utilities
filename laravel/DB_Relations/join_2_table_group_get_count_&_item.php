<?php
        $data = DB::table('applications')
                ->select('sub_divisions.name', DB::raw('COUNT(applications.sub_division_id) as count'))
                ->join('sub_divisions','sub_divisions.id','=','applications.sub_division_id')
                ->groupBy('sub_divisions.name')
                ->get();
        