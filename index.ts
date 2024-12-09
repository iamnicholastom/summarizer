import "dotenv/config";
import { Pipe, getRunner } from "@baseai/core";
import pipeSummarizer from "./baseai/pipes/summarizer";

const pipe = new Pipe(pipeSummarizer());

const userMsg = `TCP/IP Protocol Suite Implementation and Internetwork Layer Processing

The Internet Protocol (IP) operates within the network layer of the TCP/IP protocol suite, implementing a connectionless datagram delivery service with no guarantee of reliable, in-order delivery. IP datagrams are processed independently, potentially following different network paths to their destination. The IPv4 header structure contains critical fields including: Version (4 bits), Internet Header Length (IHL, 4 bits), Type of Service (TOS, 8 bits precedence and QoS indicators), Total Length (16 bits), Identification (16 bits for fragmentation/reassembly), Flags (3 bits controlling fragmentation), Fragment Offset (13 bits), Time to Live (TTL, 8 bits), Protocol (8 bits indicating next level protocol), Header Checksum (16 bits), Source Address (32 bits), Destination Address (32 bits), and Options (variable length).

Packet fragmentation occurs when a datagram exceeds the Maximum Transmission Unit (MTU) of the underlying network. The original datagram is divided into multiple fragments, each containing a portion of the original data. The Identification field ensures all fragments of a datagram can be correctly reassembled, while the Fragment Offset indicates each fragment's position in the original datagram. The More Fragments (MF) flag signals whether additional fragments follow, and the Don't Fragment (DF) flag prevents fragmentation when set.

The IP routing process involves both direct and indirect delivery mechanisms. In direct delivery, the destination host is on the same network as the source. The sending host encapsulates the IP datagram within a data link layer frame using the destination host's physical address obtained through Address Resolution Protocol (ARP). In indirect delivery, the destination host is on a remote network, requiring the datagram to traverse multiple routers. Each router performs a longest prefix match against its routing table to determine the next hop. Routing protocols like RIP, OSPF, and BGP populate these tables through dynamic route discovery and exchange.

Error and control messaging is handled by the Internet Control Message Protocol (ICMP), which operates as a companion protocol to IP. ICMP messages are encapsulated within IP datagrams and include types such as: Destination Unreachable (Type 3), Time Exceeded (Type 11), Parameter Problem (Type 12), Source Quench (Type 4), Redirect (Type 5), Echo Request/Reply (Types 8/0), and Router Advertisement/Solicitation (Types 9/10). Each ICMP message type contains additional codes providing more specific error information. The Time Exceeded message, for example, indicates either TTL expiration (Code 0) or fragment reassembly timeout (Code 1).

Quality of Service (QoS) implementation relies on the Type of Service field in the IP header, which has been redefined as the Differentiated Services (DS) field. The first 6 bits comprise the Differentiated Services Code Point (DSCP), while the last 2 bits are used for Explicit Congestion Notification (ECN). The DSCP value determines the Per-Hop Behavior (PHB) applied to the packet, affecting queuing, scheduling, and drop precedence at each router. Standard PHBs include Default (best-effort), Expedited Forwarding (low latency), and Assured Forwarding (providing different levels of forwarding assurances).`;

async function main() {
  const { stream } = await pipe.run({
    messages: [{ role: "user", content: userMsg }],
    stream: true,
  });

  const runner = getRunner(stream);

  // Method 1: Using event listeners
  runner.on("connect", () => {
    console.log("Stream started.\n");
  });

  runner.on("content", (content) => {
    process.stdout.write(content);
  });

  runner.on("end", () => {
    console.log("\nStream ended.");
  });

  runner.on("error", (error) => {
    console.error("Error:", error);
  });
}

main();
