### Import Cloud Database:
From Server to Local
```
mongodump --uri="mongodb+srv://username:password@cluster.address.mongodb.net/databaseName" --out=/myLocalPath/folderName
```

### Export Cloud Database:
From Local to Server
```
mongorestore --uri="mongodb+srv://username:password@cluster.address.mongodb.net/databaseName" \
--db serverDatabaseName \
/myLocalPath/Mongodb_backup/localDatabaseName/
```
### Import Local Databse:
From Local to Local
```
mongodump --uri="mongodb://localhost:27017/databaseName" --out=/myLocalPath/folderName
```

### Export Local Databse:
From Local to Local
```
mongorestore --uri="mongodb://localhost:27017" \
--db databaseName \
/myLocalPath/Mongodb_backup/localDatabaseName/
```

### Set Special Charater Password Symbol to Hex Encoded Version:
- Think of it like this: If you just put 21 in your password, MongoDB thinks you actually mean the numbers "2" and "1". The % acts as a signal to the computer that says, "Hey, don't read the next two characters as text—read them as a hex code for a special symbol."

```
Symbol		Hex Code	URL-Encoded Version
  !		        21		    %21
  /		        2F		    %2F
  @		        40		    %40
  #		        23		    %23
```