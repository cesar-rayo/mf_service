const path = require("path")
const Pact = require("@pact-foundation/pact")

global.port = 5000
global.provider = new Pact({
	port: global.port,
	log: path.resolve(process.cwd(), "__tests__/contract/logs", "logs-pact.log"),
	dir: path.resolve(process.cwd(), "__tests__/contract/pacts"),
	spec: 2,
	logLevel: 'INFO',
	pactfileWriteMode: 'overwrite',
	consumer: "AppJS",
	provider: "PythonBackend"
})