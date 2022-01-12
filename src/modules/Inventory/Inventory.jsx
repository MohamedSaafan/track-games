import { Col, Container, Row } from "react-bootstrap";
import { BatIcon, EthIcon, TownIcon, TrackIcon } from "../../assets";
import InventoryCard from "./InventoryCard";
import InventoryNTFSCard from "./InventoryNTFSCard";

const Inventory = () => {
  return (
    <Container>
      <h2 className="border-bottom pb-2">Balances</h2>
      <Row>
        <Col md={6}>
          <InventoryCard name="TRACK" coinImage={TrackIcon} balance="0.0 TRACK[ETH]" network="ethereum blockchain" />
        </Col>
        <Col md={6}>
          <InventoryCard name="TRACK" coinImage={TrackIcon} balance="0.0 TRACK[ETH]" network="treasure chest" />
        </Col>
        <Col md={6}>
          <InventoryCard
            name="Ethereum"
            coinImage={EthIcon}
            balance="0.0 ETH"
            price="US$0.00"
            network="ethereum blockchain"
          />
        </Col>
        <Col md={6}>
          <InventoryCard name="TownCoin" coinImage={TownIcon} balance="0.0 TOWN[GC]" network="ethereum blockchain" />
        </Col>
        <Col md={6}>
          <InventoryCard name="TownCoin" coinImage={TownIcon} balance="0.0 TOWN[GC]" network="treasure chest" />
        </Col>
        <Col md={6}>
          <InventoryCard
            name="BAT"
            coinImage={BatIcon}
            balance="0.0 BAT"
            price="US$0.00"
            network="ethereum blockchain"
          />
        </Col>
      </Row>
      <h2 className="border-bottom pb-2 mt-4">NFTs</h2>
      <Row>
        <Col md={6}>
          <InventoryNTFSCard name="Town Star" nftImage={TrackIcon} itemsLength={1} />
        </Col>
        <Col md={6}>
          <InventoryNTFSCard name="Mirandus" nftImage={TrackIcon} itemsLength={7} />
        </Col>
        <Col md={6}>
          <InventoryNTFSCard name="Spider Tanks" nftImage={EthIcon} itemsLength={2} />
        </Col>
        <Col md={6}>
          <InventoryNTFSCard
            name="Collectibles"
            nftImage={TownIcon}
            itemsLength={1}
            description="Treasure Chest Items now live here!"
          />
        </Col>
        <Col md={6}>
          <InventoryNTFSCard
            name="Echoes of Empire"
            nftImage={TownIcon}
            itemsLength={1}
            description="Treasure Chest Items now live here!"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Inventory;
