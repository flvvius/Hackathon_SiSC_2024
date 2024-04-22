import Maps from "../components/Maps.jsx";

export default function MapPage() {
  return (
    <div className="container-map">
      <Maps
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <a href="https://www.google.com/maps/dir/44.4479933,26.0989492/Cartier+I+C+Frimu,+Gala%C8%9Bi/@44.9240679,26.4093224,9z/data=!3m1!4b1!4m19!1m8!3m7!1s0x40b6de613831fa41:0xede6cc09d71cdec6!2sCartier+I+C+Frimu,+Gala%C8%9Bi!3b1!8m2!3d45.4440889!4d28.0276867!16s%2Fg%2F1tff1jrz!4m9!1m1!4e1!1m5!1m1!1s0x40b6de613831fa41:0xede6cc09d71cdec6!2m2!1d28.0276867!2d45.4440889!3e3?entry=ttu" target="_blanks">
        How do I get there?
      </a>
    </div>
  );
}
