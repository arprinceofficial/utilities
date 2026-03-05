## Figma MCP Setup

Use these steps to connect a local Figma MCP server to your editor and pull design data.

### 1) Create a Figma personal access token

1. Go to https://www.figma.com
2. Click your avatar -> Settings
3. Scroll to Personal access tokens
4. Click Create new token, then copy it

Keep this token private. Do not commit it to git or paste it into README or chat.

### 2) Get the Figma file key

From a Figma URL like:

```
https://www.figma.com/design/9szMReUyLWo5QU9rnOfrXV/Abovecmd?node-id=222-993&m=dev
```

The file key is:

```
9szMReUyLWo5QU9rnOfrXV
```

### 3) Start the MCP server

Run your MCP server command and pass the token (and file key if required). Example pattern:

```bash
FIGMA_TOKEN="your_token_here" FIGMA_FILE_KEY="9szMReUyLWo5QU9rnOfrXV" <start-mcp-server-command>
```

If your MCP server uses a different variable name, follow its docs.

### 4) Configure the MCP client (VS Code)

Create or update your MCP config at:

```
~/.config/Code/User/mcp.json
```

Example config:

```jsonc
{
	"servers": {
		"figma-desktop": {
			"url": "http://127.0.0.1:3845/mcp",
			"type": "http"
		}
	},
	"inputs": []
}
```

### 5) Reload the editor

Reload your editor window so it re-reads the MCP config.

### 6) Verify the connection

Open the MCP tool list in your editor and confirm Figma tools appear. If tools do not show, check:

- The MCP server is running
- The token is valid
- The URL matches the server port


---
