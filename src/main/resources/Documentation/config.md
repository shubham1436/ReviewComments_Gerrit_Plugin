Configuration
=============

The configuration of the @PLUGIN@ plugin is done on project level in
the `project.config` file of the project. Missing values are inherited
from the parent projects. This means a global default configuration can
be done in the `project.config` file of the `All-Projects` root project.
Other projects can then override the configuration in their own
`project.config` file.

```
  [plugin "changemessage"]
    changeInfo = This is my change info message.
```

plugin.changemessage.changeInfo
:	A static info message that should be displayed on the change screen
	for every change.

	By default null, no change info message.

Project owners can set the change info message directly from the
general project screen in the Gerrit web UI (parameter
"Change Info Message").

