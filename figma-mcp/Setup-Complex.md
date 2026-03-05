## Figma MCP Setup

Use these steps to connect a local Figma MCP server to your editor and pull design data.

### 1) Create a Figma personal access token

1. Go to https://www.figma.com
2. Click your avatar -> Settings
3. Scroll to Personal access tokens
4. Click Create new token, then copy it

Keep this token private. Do not commit it to git or paste it into README or chat.

### 2) Configure the MCP client (VS Code) 
* ctrl+shift+p
* MCP: Add Server
* select http
* https://mcp.figma.com/mcp
* press enter or give a name
* select global

Update your MCP config at:

```
code ~/.config/Code/User/mcp.json
```

Example config:

```jsonc
{
  "servers": {
    "figma": {
      "command": "/home/user/.nvm/versions/node/v22.15.0/bin/node",
      "args": [
        "/home/ar-prince/.nvm/versions/node/v22.15.0/lib/node_modules/figma-developer-mcp/dist/bin.js",
        "--stdio"
      ],
      "env": {
        "FIGMA_API_KEY": "yourKey",
        "PATH": "/home/user/.nvm/versions/node/v22.15.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
      }
    }
  }
}
```
### 3) Start the MCP server
### 4) Test the connection
* The MCP server is running
* The token is valid
* The URL matches the server port

### 5) Reload the editor
### 6) Verify the connection
- ran whoami-figma MCP server
- ran get_figma_data - Figma MCP server


---
